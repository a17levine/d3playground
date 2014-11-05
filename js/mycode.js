var lifeExpectancies = {"AL":75.4, "AK":78.3, "AZ":79.6, "AR":76, "CA":80.8, "CO":80, "CT":80.8, "DE":78.4, "DC":76.5, "FL":79.4, "GA":77.2, "HI":81.48, "ID":79.5, "IL":79, "IN":77.6, "IA":79.7, "KS":78.7, "KY":76, "LS":75.7, "ME":79.2, "MD":78.8, "MA":80.5, "MI":78.2, "MN":80.85, "MS":75, "MO":77.5, "MT":78.5, "NE":79.8, "NV":78.1, "NH":80.3, "NJ":80.3, "NM":78.4, "NY":80.5, "NC":77.8, "ND":79.5, "OH":77.8, "OK":75.9, "OR":79.5, "PA":78.5, "RI":79.9, "SC":77, "SD":79.5, "TN":76.3, "TX":78.5, "UT":80.2, "VT":80.5, "VA":79, "WA":79.9, "WV":75.4, "WI":80, "WY":78.3};

var scale = d3.scale.linear()
                    .domain([75, 81.48])
                    .range([0, 1]);

function tooltipHtml(n, d) { /* function to create html content string in tooltip div. */
    return "<h4>" + n + "</h4><table>" +
        "<tr><td>Life expectancy</td><td>" + (d.years) + " years</td></tr>" +
        "</table>";
}

var sampleData = {}; /* Sample random data. */
["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
    "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
    "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
    "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
    "WI", "MO", "AR", "OK", "KS", "LS", "VA"
]
.forEach(function(d) {
    sampleData[d] = {
        years: lifeExpectancies[d],
        color: d3.interpolate("#F70202", "#06CF21")(scale(lifeExpectancies[d]))
    };
});


/* draw states on id #statesvg */
uStates.draw("#statesvg", sampleData, tooltipHtml);