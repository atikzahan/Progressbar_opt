function extractWidthPercentage(styles) {
	var result = styles.match(/width:\s+(\d+)%/);

	return result[1];
}

QUnit.test("minus25 test", function(assert) {
    expect(3);

    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 25, "Passed!");
    $('#minus25').trigger('click');
    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 0, "Passed!");
    $('#minus25').trigger('click');
    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 0, "Passed!");
});

QUnit.test("plus25 test", function(assert) {
    expect(5);

    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 0, "Passed!");
    $('#plus25').trigger('click').trigger('click').trigger('click').trigger('click');
    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 100, "Passed!");
    $('#plus25').trigger('click');
    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 125, "Passed!");
    assert.ok($('#progress1 > .progress-bar').hasClass('overflow'), "Passed!");
    assert.ok(extractWidthPercentage($('#progress1 > .progress-bar').attr('style')) == 100, "Passed!");
});

QUnit.test("minus10 test", function(assert) {
    expect(4);

    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 125, "Passed!");
    $('#minus10').trigger('click').trigger('click').trigger('click');
    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 95, "Passed!");
    assert.ok(extractWidthPercentage($('#progress1 > .progress-bar').attr('style')) == 95, "Passed!");
    assert.ok(!$('#progress1 > .progress-bar').hasClass('overflow'), "Passed!");
});

QUnit.test("plus10 test", function(assert) {
    expect(4);

    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 95, "Passed!");
    $('#plus10').trigger('click');
    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 105, "Passed!");
    assert.ok(extractWidthPercentage($('#progress1 > .progress-bar').attr('style')) == 100, "Passed!");
    assert.ok($('#progress1 > .progress-bar').hasClass('overflow'), "Passed!");
});

QUnit.test("progress bar select test", function(assert) {
    expect(6);

    assert.ok($('#progress1 > .progress-bar').attr('aria-valuenow') == 105, "Passed!");
    assert.ok($('#progress2 > .progress-bar').attr('aria-valuenow') == 50, "Passed!");
    $('#current-progress').val('progress2');
    $('#plus10').trigger('click');
    assert.ok($('#progress2 > .progress-bar').attr('aria-valuenow') == 60, "Passed!");
    $('#plus25').trigger('click');
    assert.ok($('#progress2 > .progress-bar').attr('aria-valuenow') == 85, "Passed!");
    $('#minus10').trigger('click');
    assert.ok($('#progress2 > .progress-bar').attr('aria-valuenow') == 75, "Passed!");
    $('#minus25').trigger('click');
    assert.ok($('#progress2 > .progress-bar').attr('aria-valuenow') == 50, "Passed!");
});