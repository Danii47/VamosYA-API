import { Request } from "express"

export interface RequestWithUser extends Request {
  session: {
    userId: any
  }
}
