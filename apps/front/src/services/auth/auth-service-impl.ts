import { AuthService } from "@/services/auth/auth-service";

export class AuthServiceImpl implements AuthService {
  async login(email: string, password: string): Promise<void> {
    // Implement the login logic here
    console.log(`Logging in with email: ${email} and password: ${password}`);
    // Simulate an API call
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async signUp(email: string, password: string): Promise<void> {
    // Implement the sign-up logic here
    console.log(`Signing up with email: ${email} and password: ${password}`);
    // Simulate an API call
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
