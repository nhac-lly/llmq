endpoints should be endpoint/charts

example
GET /charts?metrics=prs_opened,prs_merged&filters[repository]=backend-api&filters[date]=7d

response
{
    "data": [
        {
            "name": "prs_opened",
            "values": [
                12,
                15,
                18,
                14,
                22,
                25
            ]
        },
        {
            "name": "prs_merged",
            "values": [
                10,
                12,
                15,
                13,
                20,
                24
            ]
        }
    ],
    "filters": {
        "repository": "backend-api",
        "date": "7d"
    }
}

or single chart
GET /charts?metrics=prs_opened&filters[repository]=backend-api&filters[date]=7d

response
{
    "data": [
        {
            "name": "prs_opened",
            "values": [
                12,
                15,
                18,
                14,
                22,
                25
            ]
        }
    ],
    "filters": {
        "repository": "backend-api",
        "date": "7d"
    }
}