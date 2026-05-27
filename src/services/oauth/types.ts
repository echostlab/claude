export type SubscriptionType = string
export type RateLimitTier = string

export type OAuthProfileResponse = {
  email_address?: string
  organization?: Record<string, unknown>
  [key: string]: unknown
}

export type OAuthTokenExchangeResponse = {
  access_token: string
  refresh_token: string
  expires_in: number
  scope: string
  account?: {
    uuid?: string
    email_address?: string
  }
  organization?: {
    uuid?: string
  }
}

export type OAuthTokens = {
  accessToken: string
  refreshToken: string
  expiresAt: number
  scopes: string[]
  subscriptionType?: SubscriptionType
  rateLimitTier?: RateLimitTier
  profile?: OAuthProfileResponse
  tokenAccount?: {
    uuid?: string
    email_address?: string
  }
}
