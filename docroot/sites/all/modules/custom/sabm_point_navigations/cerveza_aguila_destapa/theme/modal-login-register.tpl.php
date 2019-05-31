<?php if($modal_video):?>
    <div  id="modal-login-register" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center d-flex align-items-center flex-column">
            <h3>Ups, para ver este capítulo tienes que registrarte o iniciar sesión.<br />  Rápido pa'que no te pierdas nada.</h3>
            <a href="/user/login" class="btn btn-secondary">Inicia sesión</a>
            <span class="span-or">o</span>
            <a href="/user/register" class="btn btn-default">Regístrate</a>
          </div>
        </div>
      </div>
    </div>
<?php else:?>
    <div  id="modal-login-register" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-center d-flex align-items-center flex-column">
                    <h3>Ups, para compartir este capítulo tienes que registrarte o iniciar sesión.<br />  Rápido pa'que no te pierdas nada.</h3>
                    <a href="/user/login" class="btn btn-secondary">Inicia sesión</a>
                    <span class="span-or">o</span>
                    <a href="/user/register" class="btn btn-default">Regístrate</a>
                </div>
            </div>
        </div>
    </div>
<?php endif;?>
