import { Request, Response, NextFunction } from "express";
import { isObjectIdOrHexString } from "mongoose";
export default async function filterNullRequest(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const values = Object.keys(req.body);
        const filvalues = values.filter(
            (v) =>
                !Boolean(req.body[v].trim()) ||
                !isObjectIdOrHexString(req.body[v]),
        );

        if (filvalues.length > 0) {
            res.status(400).json({
                ...req.body,
                errors: filvalues,
            });
        } else {
            next();
        }
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }
}
