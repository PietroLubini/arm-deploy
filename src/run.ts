// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { main } from "./main";
import { error } from "@actions/core";

try {
  main();
} catch (err) {
  error("Global error occurred");
  error(err as Error);
}
