class People
  BASE_URL = 'https://api.salesloft.com'.freeze

  def self.all
    RestClient.get(
      "#{BASE_URL}/v2/people.json",
      {
        :Authorization => "Bearer #{ENV['API_KEY']}"
      }
    )
  end
end
