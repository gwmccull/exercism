var obj = {};
obj.compute = function(seg1, seg2) {
    if (seg1.length !== seg2.length) {
        throw(new Error('DNA strands must be of equal length.'));
    }

    var distance = 0;

    for (var ii = 0; ii < seg1.length; ii++) {
        if (seg1.charAt(ii) !== seg2.charAt(ii)) {
            distance++;
        }
    }

    return distance;
};

module.exports = obj;