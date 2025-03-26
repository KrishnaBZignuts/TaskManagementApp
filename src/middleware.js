import { NextResponse } from "next/server";
import { auth } from "./lib/firebase";

export function middleware(request) {
  const user = auth.currentUser;
  return NextResponse.next();
}
