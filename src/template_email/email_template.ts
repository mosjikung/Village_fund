export const template_email = (mail: string, form_no: string, phone_no: string, dataTime: string) => {
  return `<!DOCTYPE html>
  <html lang="th">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;600&display=swap" rel="stylesheet" />
    </head>
    <body style="background: #ffffff; font-family: 'IBM Plex Sans Thai', sans-serif; font-size: 16px; min-height: 100vh; padding: 35px 10px; margin: 0; box-sizing: border-box">
      <div style="background: #ffffff; border: 20px solid #eef3f8; margin: 0 auto; width: 487px; max-width: 100%; padding: 30px 20px; box-sizing: border-box">
        <div style="padding-bottom: 16px;"><img src="https://villagefund-management.thailand-digitalgovernment.com/images/logo-oss.png" style="width: 32px" alt="LROC" /></div>
        <div style="color: #050D2D; font-size: 20px; font-weight: 600; padding-bottom: 18px;">ขอบคุณที่ลงทะเบียนยืนยันสถานะการดำเนินกิจการกองทุนหมู่บ้านกับเรา</div>
        <div style="color: #050D2D; font-size: 14px;">ระบบได้รับข้อมูลของคุณเรียบร้อยแล้ว โปรดรอการตรวจสอบ</div>
        <div style="color: #050D2D; font-size: 14px; padding-bottom: 18px;">โดยมีเจ้าหน้าที่ติดต่อกลับ เพื่อแจ้งผลการลงทะเบียน</div>
        <div style="background: #ffffff; border: 1px solid #ccc; padding: 16px; border-radius: 8px; margin-bottom: 18px;">
          <div style="color: #050D2D; font-size: 16px; font-weight: 600; border-bottom: 1px solid #ccc; padding-bottom: 10px;">รายละเอียด</div>
            <div style="color: #050D2D; font-size: 14px; font-weight: 600;  padding-top: 10px;">เลขที่ลงทะเบียน : <span style="font-weight: normal;"> ${form_no}</span></div>
            <div style="color: #050D2D; font-size: 14px; font-weight: 600;">อีเมล : <a href="/" style="font-weight: normal; color: #050D2D !important; text-decoration: none !important;">${mail}</a></div>
            <div style="color: #050D2D; font-size: 14px; font-weight: 600;">เบอร์โทรศัพท์ : <span style="font-weight: normal;">${phone_no}</span></div>
            <div style="color: #050D2D; font-size: 14px; font-weight: 600;">วัน/เวลา : <span style="font-weight: normal;">${dataTime}</span></div>
        </div>
        <div style="color: #050D2D; font-size: 14px;">หากไม่ใช่คุณ โปรดติดต่อฝ่ายสนับสนุนทันที</div>
      </div>
    </body>
  </html>`
};

