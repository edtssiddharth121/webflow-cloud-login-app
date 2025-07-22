
const users = await cloud.data.get("users") || [];

export default async function handler(req) {
  const body = await req.json();
  const { email, password } = body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    return new Response("Login successful", { status: 200 });
  } else {
    return new Response("Invalid credentials", { status: 401 });
  }
}
