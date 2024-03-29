class User < ApplicationRecord
    attr_reader :password

    validates :email, :email, :password_digest, :session_token, presence: true
    validates :email, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :cart_items,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :CartItem

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
        pass_obj.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end