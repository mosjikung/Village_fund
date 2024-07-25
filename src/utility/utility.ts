export function extractTokenFromHeader(jwtToken: string): string | undefined {
  const [type, token] = jwtToken?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}