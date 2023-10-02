import * as jose from "jose";

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
  private readonly ALGO = "ES256";
  private signingKey: Uint8Array;

  constructor(secret: string, private readonly config?: TokenConfig) {
    this.signingKey = new TextEncoder().encode(secret);
  }

  private preparePayload(claims: Record<string, any>): Claims {
    const payload = {
      ...claims,
      ...this.config,
    };

    return payload;
  }

  public async verifyAndDecode(token: string): Promise<T> {
    const { payload, protectedHeader } = await jose.jwtVerify(
      token,
      this.signingKey
    );

    return payload as T;
  }

  public async sign(claims: any): Promise<string> {
    const payload = this.preparePayload(claims);

    const jwtSigner = new jose.SignJWT(payload).setProtectedHeader({
      alg: this.ALGO,
    });

    const token = await jwtSigner.sign(this.signingKey);

    return token;
  }
}
