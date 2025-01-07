import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import axios from "axios"; // Para chamadas à API do Google Maps

const app = new Koa();
const router = new Router();

// Configuração para usar a API Routes do Google Maps
const GOOGLE_MAPS_API_KEY = "SUA_CHAVE_DE_API_DO_GOOGLE_MAPS";

// Tabela fictícia para motoristas
const drivers = [
  { id: 1, name: "João", minDistance: 5, ratePerKm: 2 },
  { id: 2, name: "Maria", minDistance: 10, ratePerKm: 1.8 },
  { id: 3, name: "Carlos", minDistance: 20, ratePerKm: 1.5 },
];

// Interface para validação de entrada
interface EstimateRequest {
  userId: string;
  origin: string;
  destination: string;
}

// Endpoint para estimativa de viagem
router.post("/ride/estimate", async (ctx) => {
  const { userId, origin, destination } = ctx.request.body as EstimateRequest;

  if (!userId || !origin || !destination) {
    ctx.status = 400;
    ctx.body = { success: false, message: "Parâmetros obrigatórios ausentes" };
    return;
  }

  if (origin === destination) {
    ctx.status = 400;
    ctx.body = { success: false, message: "Origem e destino não podem ser iguais" };
    return;
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
        origin
      )}&destination=${encodeURIComponent(destination)}&key=${GOOGLE_MAPS_API_KEY}`
    );

    const route = response.data.routes[0];
    if (!route) {
      ctx.status = 400;
      ctx.body = {
        success: false,
        message: "Não foi possível calcular a rota. Verifique os endereços.",
      };
      return;
    }

    const distanceInMeters = route.legs[0].distance.value;
    const distanceInKm = distanceInMeters / 1000;

    const availableDrivers = drivers
      .filter((driver) => distanceInKm >= driver.minDistance)
      .map((driver) => ({
        driverId: driver.id,
        driverName: driver.name,
        tripCost: (distanceInKm * driver.ratePerKm).toFixed(2),
      }));

    ctx.status = 200;
    ctx.body = {
      success: true,
      message: "Estimativa calculada com sucesso",
      data: {
        origin,
        destination,
        distanceInKm: distanceInKm.toFixed(2),
        drivers: availableDrivers,
      },
    };
  } catch (error) {
    console.error("Erro ao chamar a API do Google Maps:", error);
    ctx.status = 500;
    ctx.body = { success: false, message: "Erro interno ao calcular a rota" };
  }
});

app.use(router.allowedMethods());
app.use(router.routes());

// Inicializar o servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

