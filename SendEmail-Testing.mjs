import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ignacio.olea.c@gmail.com",
    pass: "sxmxchlcbifrijkz",
  },
});

var mailOptions = {
  from: "ignacio.olea.c@gmail.com",
  to: "ignacio.olea.c@gmail.com",
  subject: "Clave de Acceso Buk Asistencia",
  text: ``,
  html: `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Open+Sans:wght@400;600&display=swap');
  </style>
  <body bgcolor="#f7f7f7">
    <table align="center" cellpadding="0" cellspacing="0"
           class="container-for-gmail-android" width="100%"
           style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#D9E2F9;border-radius:12px;">
      <tbody>
        <tr>
          <td align="center" style="padding:0;">
            <table role="presentation" align="center" style="max-width:500px;border-collapse:collapse; text-align:center;">
              <tbody>
                <tr>
                  <td style="padding:20px;background:#D9E2F9;">
                    <table role="presentation" style="width:100%;">
                      <tbody><tr></tr></tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 5rem 42px 5rem;background:#fafbfd;border-radius:12px">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0; text-align:center;">
                      <tbody>
                        <tr><td><img src="https://raw.githubusercontent.com/Ignaciooleac/Asistencia-Emails/main/images/Header-NuevaCuenta.png" alt="images" style="width: 100px;height: auto"></td></tr>
                        <tr style="font-family: 'Inter', sans-serif;">
                          <td style="font-size:12pt">
                            <h1 style="padding-top:18px;font-size:20px;font-weight:700;line-height:24px;color:#242527;margin:0 0 8px 0;">
                              ¡Tu Cuenta ha sido Creada!
                            </h1>
                            <hr style="border-top: 5px solid #FFA800;border-radius: 5px;width:33%;">
                            <p style="margin-top:25px;">
                              <p>Hola <span style="font-weight: bold;">$Nombre</span></p>
                              <p>Enviamos tus credenciales para acceder a la platafoma.</p>
                              <ul style=" list-style-type: none;padding: 15px;line-height: 0;">
                                <li><p><span style="font-weight: bold; padding-right:10px;">Usuario:</span><span>$Nombre de Usuario</span></p></li>
                                <li><p><span style="font-weight: bold; padding-right:10px;">Contraseña:</span><span>$Contraseña</span></p></li>
                              </ul>
                              <tr style="font-family: 'Inter', sans-serif;">
                                <td>
                                  <a href="<%= yield :link %>" style="background-color:#2F4DAA;padding:8px 16px;border-radius:4px;color:#FAFBFD; text-decoration:none;font-size:12pt;">
                                Ingresar
                                </a>
                              </td>
                            </tr>
                            <tr style="font-family: 'Inter', sans-serif;">
                                <td>
                                  <p style="font-weight: 300;padding-top: 15px;font-size:10px">Dentro de la plataforma, recomendamos personalizar la clave, haciendo click en el ícono ubicado en el extremo superior derecho a un costado de "soporte".  </p>
                              </td>
                            </tr>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:7px;background:#D9E2F9;">
                    <table role="presentation" style="width:100%;">
                      <tbody><tr></tr></tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;background:#FFFFFF;border-radius:12px;">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:'Inter',sans-serif;">
                      <tbody>
                        <tr style="align-content: center;">
                          <td>
                            <a href="http://www.buk.#{domain}">
                              <!-- <%= email_image_tag logo, size: '81x62', skip_pipeline: true %> -->
                              <img src="https://raw.githubusercontent.com/Ignaciooleac/Asistencia-Emails/main/images/LogoAsistencia.png" alt="Buk Asistencia" style="width: 5rem;">
                            </a>
                          </td>
                        </tr>
                        
                        <tr style="display:inline;margin-bottom:6px;align-content: center;">
                          <td style="width:28px;">
                            <a href="https://www.linkedin.com/company/buk-cl">
                              <img src="https://raw.githubusercontent.com/Ignaciooleac/Asistencia-Emails/main/images/rrss-linkedin.png" alt="linkedin" style="width:100%">
                            </a>
                          </td>
                          <td style="padding:0 0 0 10px;width:28px;">
                            <a href="https://www.facebook.com/bukRRHH">
                              <img src="https://raw.githubusercontent.com/Ignaciooleac/Asistencia-Emails/main/images/rrss-facebook.png" alt="facebook" style="width:100%">
                            </a>
                          </td>
                          <td style="padding:0 0 0 10px;width:28px;">
                            <a href="https://www.instagram.com/buk_rrhh">
                             <img src="https://raw.githubusercontent.com/Ignaciooleac/Asistencia-Emails/main/images/rrss-instagram.png" alt="instagram" style="width:100%">
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p style="font-size:12px;line-height:18px;font-weight:400;color:#464748; text-align:center;font-family: 'Inter', sans-serif;">
                              Rosario Norte 555, Las Condes, Oficina 1801, Santiago, Chile.<br/>
                              <!-- <% unless General.freemium %> -->
                                <a href="http://www.buk.#" style="font-weight:700;color:#4765CB;text-decoration:none">www.buk.cl</a>
                              <!-- <% end %> -->
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px;background:#D9E2F9;">
                    <table role="presentation" style="width:100%;">
                      <tbody><tr></tr></tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
</body>`,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
