package nu.qasedak.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import nu.qasedak.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
