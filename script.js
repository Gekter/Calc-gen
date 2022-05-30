function addCalc(target) {
    let html = `<div class="calc">
    <div class="container">
        <div class="row my-3">
            <div class="offset-2 col-md-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Первое число</span>
                    </div>
                    <input type="number" class="form-control" id="num1" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="col-md-2">
                <select class="form-select" aria-label="Default select example">
                    <option value="%2B">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="%25">%</option>
                </select>
            </div>
            <div class="col-md-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2">Второе число</span>
                    </div>
                    <input type="number" class="form-control" id="num2" aria-describedby="basic-addon2">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="offset-2 col-md-8 mb-3">
                <button type="submit" class="btn btn-primary col-12">Вычислить</button>
            </div>
        </div>
        <div class="row">
            <div class="offset-2 col-md-8">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">Результат</span>
                    </div>
                    <input type="number" class="form-control" id="res" disabled="True" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
    </div>
</div>`
    html = $.parseHTML(html)[0]
    html.querySelector('button').onclick = function () {
        $.ajax({
            type: "GET",
            url: `http://gektor.istu.webappz.ru/lab9/server.php?a=${html.querySelector('#num1').value}&op=${html.querySelector('select').value}&b=${html.querySelector('#num2').value}`,
            success: function (data) {
                html.querySelector('#res').value = data
            }
        });
    }
    $(target).append(html);
}

function add() {
    document.getElementById("addCalc").onclick = function() {
        addCalc('body')
    } 
}

$( document ).ready(function() {
    add()
    addCalc('body')
});


