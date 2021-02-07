/*
Quantumult X 脚本:
[rewrite_local]
# 绘画桌解锁 Unlock （by lazzz）
^https:\/\/fzgyf3ois6\.execute-api\.us-east-1\.amazonaws.com\/drawingdesk\/verifyreceipt url script-response-body https://gitee.com/mumujiji/rewrite/raw/master/huihuazhuo.js
[mitm]
hostname = fzgyf3ois6.execute-api.us-east-1.amazonaws.com,
*/

let obj = JSON.parse($response.body);

obj = {
    "status": 0,
    "latest_receipt_info": [{
        "quantity": "1",
        "product_id": "com.axis.drawingdesk.onboardyearly",
        "transaction_id": "80000852664984",
        "original_transaction_id": "80000852664984",
        "purchase_date": "2021-01-29 05:34:40 Etc/GMT",
        "purchase_date_ms": "1611898480000",
        "purchase_date_pst": "2021-01-28 21:34:40 America/Los_Angeles",
        "original_purchase_date": "2021-01-29 05:34:40 Etc/GMT",
        "original_purchase_date_ms": "1611898480000",
        "original_purchase_date_pst": "2021-01-28 21:34:40 America/Los_Angeles",
        "expires_date": "2022-02-05 05:34:40 Etc/GMT",
        "expires_date_ms": "1644039280000",
        "expires_date_pst": "2022-02-04 21:34:40 America/Los_Angeles",
        "web_order_line_item_id": "80000328470554",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED",
        "subscription_group_identifier": "20431824"
    }]
}

$done({ body: JSON.stringify(obj) });
