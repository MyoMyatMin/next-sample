export async function GET(request) {
  const rate = parseFloat(process.env.VAT_RATE);
  return Response.json({ rate });
}
