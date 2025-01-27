import { Request, Response } from "express-serve-static-core";
import "../extensions";
import { emitUserToken } from "../socket-util";
import { getUser, userDbMgr } from "./util";

export async function listTokens(req: Request, res: Response) {
  const mgr = userDbMgr(req);
  const tokens = await mgr.listPersonalApiTokens();
  res.json({ tokens });
}

export async function createToken(req: Request, res: Response) {
  const mgr = userDbMgr(req);
  const token = await mgr.createPersonalApiToken();
  res.json({ token });
}

export async function emitToken(req: Request, res: Response) {
  const mgr = userDbMgr(req);
  const token = await mgr.createPersonalApiToken();

  const user = getUser(req);
  await emitUserToken(req, user.email, req.params.initToken, token.token);

  res.json({ token });
}

export async function revokeToken(req: Request, res: Response) {
  const mgr = userDbMgr(req);
  const tokenStr = req.params.token;
  await mgr.revokePersonalApiToken(tokenStr);
  res.json({});
}
