import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

export class Configuration {
    public static readonly SERVER_PORT: number = parseInt(process.env.SERVER_PORT) || 9800;

    public static readonly CORS_OPTIONS: CorsOptions = {
        origin: 'http://localhost:3000',
        credentials: true
    }
}