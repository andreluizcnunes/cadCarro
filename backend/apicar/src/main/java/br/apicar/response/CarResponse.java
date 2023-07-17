package br.apicar.response;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
public class CarResponse {

    private String smsResponse;
}
