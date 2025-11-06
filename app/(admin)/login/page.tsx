"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function AdminLoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <form
        onSubmit={handleSubmit}
        className="card w-[400px] space-y-4 p-6 text-center"
      >
        <h1 className="text-2xl font-semibold">Admin Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-border px-3 py-2 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded border border-border px-3 py-2 text-sm"
        />

        <button type="submit" className="btn btn-primary w-full">
          Sign In
        </button>
      </form>
    </div>
  );
}
