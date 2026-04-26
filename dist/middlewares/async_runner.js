//log error here............
export const async_runner = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        }
        catch (ex) {
            next(ex);
        }
    };
};
//# sourceMappingURL=async_runner.js.map