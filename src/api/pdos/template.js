/** 销售订单模板 */
import { pdosService } from '@/utils/request'

// 销售订单模板
export function getPurchaseOrderTemplateByPage ({
  currentPage = 1,
  pageSize = 10,
  keyword,
  orderByClause,
  orderNo,
  status,
  gmtCreatedBegin,
  gmtCreatedEnd,
  ...rest
}) {
  return pdosService({
    url: '/pdos/pdosOrderTemplate/page',
    method: 'post',
    data: {
      currentPage,
      pageSize,
      keyword,
      orderByClause,
      orderNo,
      status,
      gmtCreatedBegin,
      gmtCreatedEnd,
      ...rest
    }
  })
}

// 新增订单模板
export function addPurchaseOrderTemplate (data) {
  return pdosService({
    url: '/pdos/pdosOrderTemplate',
    method: 'post',
    data,
    showSuccess: true
  })
}

// 订单模板详情
export function getPurchaseOrderTemplateDetail (id) {
  return pdosService({
    url: `/pdos/pdosOrderTemplate/${id}`,
    method: 'get'
  })
}
