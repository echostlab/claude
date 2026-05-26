export type RateLimitTier = string
export type SubscriptionType = string
export type BillingType = string

export type OAuthProfileResponse = {
  email?: string
  subscriptionType?: SubscriptionType | null
  rateLimitTier?: RateLimitTier | null
  billingType?: BillingType | null
  rawProfile?: Record<string, unknown>
  [key: string]: unknown
}

export type OAuthTokenExchangeResponse = {
  access_token: string
  refresh_token: string
  expires_in: number
  scope: string
  account?: {
    uuid: string
    email_address: string
  }
  organization?: {
    uuid: string
  }
  [key: string]: unknown
}

export type OAuthTokens = {
  accessToken: string
  refreshToken: string
  expiresAt: number
  scopes: string[]
  subscriptionType: SubscriptionType | null
  rateLimitTier: RateLimitTier | null
  profile?: OAuthProfileResponse
  tokenAccount?: {
    uuid: string
    emailAddress: string
    organizationUuid?: string
  }
}

export type UserRolesResponse = {
  roles: string[]
  [key: string]: unknown
}
