import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request, params }: LoaderFunctionArgs) {
    return Response.json({
        dataset: {
            columns: [
                ["Approved", 50],
                ["Rejected", 10],
                ["Pending", 20],
                ["Rework", 15]
            ]
        }
    });
}
