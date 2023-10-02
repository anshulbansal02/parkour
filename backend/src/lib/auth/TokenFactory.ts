import jwt from "jsonwebtoken";

interface TokenConfig {
  /** Issuer */
  iss?: string;
  /** Expire after (In Seconds Since the Epoch) */
  exp?: number;
  /** Issued at (In Seconds Since the Epoch) */
  iat?: number;
}

interface Claims extends TokenConfig {
  [claim: string]: any;
}

export class TokenFactory<T> {
  private readonly ALGO: jwt.Algorithm = "ES256";

  constructor(
    private readonly signingKey: jwt.Secret,
    private readonly config?: TokenConfig
  ) {}

  private preparePayload(claims: Record<string, any>): Claims {
    const payload = {
      ...claims,
      ...this.config,
    };

    return payload;
  }

  public verifyAndDecode(token: string): Promise<T> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.signingKey, (error, decoded) => {
        if (error) reject(error);
        else resolve(decoded as T);
      });
    });
  }

  public sign(claims: any): Promise<string> {
    return new Promise((resolve, reject) => {
      const payload = this.preparePayload(claims);

      jwt.sign(
        payload,
        this.signingKey,
        { algorithm: this.ALGO },
        (error, token) => {
          if (error) reject(error);
          else resolve(token ?? "");
        }
      );
    });
  }
}
