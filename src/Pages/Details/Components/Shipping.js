import React, { Component } from "react";
import "../Details.scss";

export class Shipping extends Component {
  render() {
    return (
      <div className="Shipping">
        <h3 className="shippingHeader">
          배송·반품<span className="subText">국내배송만 가능한 상품입니다</span>
        </h3>
        <div className="section">
          <div className="contents">
            <section className="domestic">
              <div className="titles">국내배송</div>
              <div className="domesticCont">
                <ul className="subject">
                  배송
                  <li className="subjectDetail">배송사 : CJ대한통운</li>
                  <li className="subjectDetail">
                    배송비 : 국내 3,000원 (3만 원 이상 구매 시 무료배송)
                  </li>
                  <li className="subjectDetail">
                    오후 3시 이전 결제 완료 주문건은 당일 출고, 오후 3시 이후
                    주문 건은 익일 출고됩니다.출고 이후 영업일 기준 평균 3일
                    이내 제품을 수령하실 수 있습니다. 단, 제품의 재고 상황,
                    배송량, 배송 지역에 따라 배송기일이 추가로 소요될 수 있는 점
                    양해 부탁드립니다
                  </li>
                </ul>
                <ul className="subject">
                  취소·교환·반품
                  <li className="subjectDetail">
                    주문취소 및 배송지 변경은 “주문접수” 단계에서만 가능합니다.
                    마이페이지에서 취소·변경하실 수 있습니다.
                  </li>
                  <li className="subjectDetail">
                    교환·반품은 배송완료 후 7일 이내만 가능합니다. 단, 재화 등의
                    내용이 표시, 광고 내용과 다르거나 계약내용을 다르게 이행한
                    경우에는 재화 등을 공급받은 날로부터 3개월 이내, 그 사실을
                    안 날 또는 알 수 있었던 날로부터 30일 이내에 교환·반품이
                    가능합니다.
                  </li>
                  <li className="subjectDetail">
                    상품의 불량·하자 및 표시광고 및 계약 내용이 다른 경우 해당
                    상품의 회수 비용은 무료이나, 고객님의 단순변심에 의한
                    교환·반품일 경우에는 교환·반품 배송비를 고객님께서 직접
                    부담하셔야 합니다.
                  </li>
                  <li className="subjectDetail">
                    상품 불량·하자의 경우, 상품 불량을 증명할 수 있는 사진과
                    함께 마이페이지 1:1 문의로 접수해주시면 확인 뒤 교환·반품이
                    진행됩니다.
                  </li>
                  <li className="subjectDetail">
                    여러 상품을 함께 주문 시 2개 이상의 택배 박스로 분할 출고 될
                    수 있으며, 단순변심에 의한 교환/반품 시 배송비는 송장 별로
                    발생됩니다.
                  </li>
                  <li className="subjectDetail">
                    미성년자가 구매하는 경우, 법정대리인이 동의하지 않으면
                    미성년자 또는 법정대리인이 구매를 취소할 수 있습니다.
                  </li>
                </ul>
                <ul className="subject">
                  교환·반품이 불가한 경우
                  <li className="subjectDetail">
                    이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우
                  </li>
                  <li className="subjectDetail">
                    포장이 훼손되어 상품가치가 상실된 경우 (예: 택과 라벨이
                    훼손된 경우 등)
                  </li>
                  <li className="subjectDetail">
                    이용자의 사용 또는 일부 소비에 의해 재화 등의 가치가 현저히
                    감소한 경우
                  </li>
                  <li className="subjectDetail">
                    복제가 가능한 재화 등의 포장을 훼손한 경우
                  </li>
                  <li className="subjectDetail">
                    시간 경과에 의해 재판매가 곤란할 정도로 상품의 가치가 현저히
                    감소한 경우
                  </li>
                  <li className="subjectDetail">
                    고객의 주문에 따라 개별 생산되는 상품의 경우
                  </li>
                </ul>
                <ul className="subject">
                  환불
                  <li className="subjectDetail">
                    주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7
                    영업일 이내 환불됩니다.
                  </li>
                </ul>
                <ul className="subject">
                  기타 문의
                  <li className="subjectDetail">
                    기타 교환 및 반품에 대한 문의는 1:1 문의하기 또는
                    1577-6263으로 문의해주세요.
                  </li>
                </ul>
              </div>
            </section>
            <section className="global">
              <div className="titles">글로벌 배송</div>
              <div className="globalCont">
                <ul className="subject">
                  배송
                  <li className="subjectDetail">배송사 : EMS</li>
                  <li className="subjectDetail">
                    배송비 : EMS 요금 적용 (국가별 배송비는 글로벌 배송
                    안내페이지를 참고해주세요)
                  </li>
                  <li className="subjectDetail">
                    배송기간 : 주문일로부터 1~3일 이내 출고
                  </li>
                  <li className="subjectDetail">
                    단, 상품의 재고상황, 배송량에 따라 배송기일이 추가 소요될 수
                    있는 점 양해 부탁드립니다.
                  </li>
                </ul>
                <ul className="subject">
                  취소·교환·반품
                  <li className="subjectDetail">
                    주문취소 및 배송지 변경은 “주문접수” 단계에서만 가능합니다.
                    마이페이지에서 취소·변경하실 수 있습니다.
                  </li>
                  <li className="subjectDetail">
                    글로벌 배송 구매 시, 단순 변심에 의한 교환 및 반품이
                    불가합니다.
                  </li>
                </ul>
                <ul className="subject">
                  통관·관세
                  <li className="subjectDetail">
                    국가 세관 규정에 따르면, 배송 과정에서 나라별로 관세가
                    발생할 수 있으며 관세는 고객 부담입니다. 상세 문의사항은
                    가까운 우체국이나 세관 또는 거주하시는 국가의 우체국에
                    문의바랍니다.
                  </li>
                  <li className="subjectDetail">
                    배송 국가별 금지· 제한 품목을 주문 전 확인 바랍니다.
                  </li>
                </ul>
                <ul className="subject">
                  기타 문의
                  <li className="subjectDetail">
                    기타 문의사항은 1:1 문의하기 또는 global@kakaofriends.com
                    으로 문의해주세요.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Shipping;
