package com.sparta.myselectshop.utils;

import com.sparta.myselectshop.dto.ItemDto;
import com.sparta.myselectshop.entity.Product;
import com.sparta.myselectshop.repository.ProductRepository;
import com.sparta.myselectshop.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Component
public class Scheduler {

    private final ProductRepository productRepository;
    private final ProductService productService;
    private final NaverShopSearch naverShopSearch;

    // 초, 분, 시, 일, 월, 주 순서
    @Scheduled(cron = "0 0 1 * * *")
    public void updatePrice() throws InterruptedException {
        System.out.println("가격 업데이트 실행");

        // 저장된 모든 관심상품 조회
        List<Product> productList = productRepository.findAll();
        for (int i = 0; i < productList.size(); i++) {
            // 1초에 한 상품 씩 조회
            TimeUnit.SECONDS.sleep(1);

            // i 번째 관심 상품 꺼냄
            Product p = productList.get(i);

            // i 번째 관심 상품의 제목으로 검색 실행
            String title = p.getTitle();
            String resultString = naverShopSearch.search(title);

            // i 번째 관심 상품의 검색 결과 목록 중에서 첫 번째 결과 꺼냄
            List<ItemDto> itemDtoList = naverShopSearch.fromJSONtoItems(resultString);
            ItemDto itemDto = itemDtoList.get(0);

            // i 번째 관심 상품 정보를 업데이트
            Long id = p.getId();
            productService.updateBySearch(id, itemDto);

        }
    }

}
