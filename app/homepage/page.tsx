"use client";

import type { user } from "../../lib/types/index"
import {Button} from "@/components/ui/button"
import { useState } from "react"; 
import HomePage from "../../components/homepage/main" 
import TestPage from "@/lib/types/error-return";

export default function Home() {

  return (
   <HomePage/>
  );
}
