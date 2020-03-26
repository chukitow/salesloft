require 'application_system_test_case'
require 'webmock'

class PeopleTest < ApplicationSystemTestCase
  test 'listing people' do
    response = {
      data: [
        {
          display_name: 'Ivan Velasquez',
          email_address: 'ivan@gmail.com',
          title: 'Software Engineer'
        }
      ]
    }

    stub_request(:get, "https://api.salesloft.com/v2/people.json").
      to_return(status: 200, body: response.to_json)

    visit '/'

    assert_text 'Ivan Velasquez'
  end

  test 'counting characters table' do
    response = {
      data: [
        {
          display_name: 'Ivan Velasquez',
          email_address: 'ivan@gmail.com',
          title: 'Software Engineer'
        }
      ]
    }

    stub_request(:get, "https://api.salesloft.com/v2/people.json").
      to_return(status: 200, body: response.to_json)

    visit '/'

    click_on 'Display Character Frecuency'
    assert_text 'Character Frequency'
    frequencies = all('.people-frecuency-table table tbody td').map {|node| node.text }
    assert_equal(["I", "2", "A", "2", "M", "2", "V", "1", "N", "1", "G", "1", "L", "1", "C", "1", "O", "1"], frequencies)
  end

  test 'email duplicates' do
    response = {
      data: [
        {
          display_name: 'Ivan Velasquez',
          email_address: 'ivan@gmail.com',
          title: 'Software Engineer'
        },
        {
          display_name: 'Ivan Velasquez',
          email_address: 'iva@gmail.com',
          title: 'Software Engineer'
        }
      ]
    }

    stub_request(:get, "https://api.salesloft.com/v2/people.json").
      to_return(status: 200, body: response.to_json)

    visit '/'

    click_on 'Display Duplicates Emails'
    assert_text 'Duplicates Emails'
    duplicates = all('.people-duplicates-table table tbody td').map {|node| node.text }
    assert_equal(["iva@gmail.com"], duplicates)
  end
end
