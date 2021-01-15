import { Request, Response } from "express"
import session, { Session } from "express-session"

declare global {
    namespace Express {
        interface Request {
            session: Session & Partial<session.SessionData>
        }
    }
    
}

export type SpacexContext = {
    req: Request 
    res: Response
}