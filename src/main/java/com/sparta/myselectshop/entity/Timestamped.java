package com.sparta.myselectshop.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass   // 멤버 변수가 컬럼이 되도록 한다
@EntityListeners(AuditingEntityListener.class)  // 변경되었을 때 자동으로 기록
public class Timestamped {

    @CreatedDate
    private LocalDateTime cratedAt;

    @LastModifiedDate
    private LocalDateTime modifiedAt;

}
