package com.planora.service;

import com.planora.entity.User;
import com.planora.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);

        return processOAuth2User(userRequest, oAuth2User);
    }

    private OAuth2User processOAuth2User(OAuth2UserRequest userRequest, OAuth2User oAuth2User) {
        String provider = userRequest.getClientRegistration().getRegistrationId();
        String providerId = oAuth2User.getAttribute("sub");
        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name");
        String imageUrl = oAuth2User.getAttribute("picture");

        Optional<User> userOptional = userRepository.findByEmail(email);
        User user;

        if (userOptional.isPresent()) {
            user = userOptional.get();
            // Update existing user
            if (!user.getProvider().equals(provider)) {
                throw new OAuth2AuthenticationException("Email already registered with " + user.getProvider());
            }
            user.setImageUrl(imageUrl);
            user.setProviderId(providerId);
        } else {
            // Create new user
            user = new User();
            user.setEmail(email);
            user.setUsername(name);
            user.setProvider(provider.toUpperCase());
            user.setProviderId(providerId);
            user.setImageUrl(imageUrl);
            user.setRole("USER");
            user.setPassword(""); // No password for OAuth users
        }

        userRepository.save(user);
        return oAuth2User;
    }
}
