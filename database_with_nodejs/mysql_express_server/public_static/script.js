$(() => {
    var id_input = $('#id_ip')
    var name_ip = $('#name_ip')
    var age_ip = $('#age_ip')
    var tr = $('#tr')
    var table = $('table')
    var submit = $('#submit')

    function refresh_page(persons) {
        tr.empty();
        for (var data of persons) {
            table.append(
                `<tr>
                      <td>${persons.id}</td>
                      <td>'${persons.name}'</td>
                      <td>${persons.age}</td>
                    </tr>`
            )
        }

    }
    $.get('/api/', (data) => {
        refresh_page(data);
    })
    submit.on("click", () => {
        $.post("/api/add", {
            name: name_ip.val(),
            id: id_input.val(),
            age: age_ip.val()
        }, (data) => {
            refresh_page(data)
        })
    })
})