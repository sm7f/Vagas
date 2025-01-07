interface User {
    email: string;
    password: string;
  }
  
  interface ApiResponse {
    success: boolean;
    message: string;
  }
  
  const BASE_URL = 'http://localhost:4000/api';
  
  export const cadastrarUsuario = async ({ email, password }: User): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
  
      const data = await response.json();
      return { success: true, message: data.message };
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      return { success: false, message: 'Erro ao cadastrar usuário' };
    }
  };
  
  export const verificarEmailExistente = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(`${BASE_URL}/users/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro ao verificar email');
      }
  
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error('Erro ao verificar email:', error);
      return false;
    }
  };
  
  export const loginUsuario = async ({ email, password }: User): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }
  
      const data = await response.json();
      return { success: true, message: data.message };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { success: false, message: 'Erro ao fazer login' };
    }
  };
  
  export const redefinirSenha = async ({ email, password }: User): Promise<ApiResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao redefinir senha');
      }
  
      const data = await response.json();
      return { success: true, message: data.message };
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      return { success: false, message: 'Erro ao redefinir senha' };
    }
  };
  