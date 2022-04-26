var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.Name.firstName()
        var lastName = faker.Name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.Internet.email(firstName),
            whatsapp: '73999257758',
            address: {
                postalcode: '45985126',
                street: 'Rua João Calmon',
                number: '115',
                details: 'na rua da UAI',
                district: 'Centro',
                city_state: 'Teixeira de Freitas/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}