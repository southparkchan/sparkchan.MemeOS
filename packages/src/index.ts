import { MemeOSClient } from "./client";

export const MemeOS = {
  create: async (params) => {
    const client = new MemeOSClient();
    return client.createMeme(params);
  }
};

