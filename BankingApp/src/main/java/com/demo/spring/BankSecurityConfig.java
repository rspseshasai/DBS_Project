//package com.demo.spring;
//import javax.sql.DataSource;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class BankSecurityConfig extends WebSecurityConfigurerAdapter{
//    @Autowired
//    DataSource datasource;
//    
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        
//         http
//             .authorizeRequests()
//            .antMatchers("/homepage").permitAll()
////            .antMatchers("")
////            .hasRole("USER")
////            .antMatchers("/find**")
////            .hasRole("USER")
//            .and()
//            .logout().deleteCookies("JSESSIONID").and()
//            .formLogin()
//            .and().csrf().disable()
//            .sessionManagement()
//            .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
//            .invalidSessionUrl("/invalidSession.html")
//            .maximumSessions(1)
//            .expiredUrl("/sessionExpired.html");
//    }
//    
//    
////    @Autowired
////    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
////        auth.jdbcAuthentication().dataSource(datasource)
////        .usersByUsernameQuery("select username,password,enabled from users where username=?")
////        .authoritiesByUsernameQuery("select username,authority from authorities where username=?");
////    }
//    
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//    
//}