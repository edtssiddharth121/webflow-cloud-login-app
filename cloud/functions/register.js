const users = await cloud.data.get("users") || [];

export default async function handler(req) {
  const body = await req.json();
  const { name, email, password } = body;

  if (users.find(u => u.email === email)) {
    return new Response("User already exists", { status: 400 });
  }

  users.push({ name, email, password });
  await cloud.data.set("users", users);

  return new Response("User registered successfully", { status: 200 });
}
