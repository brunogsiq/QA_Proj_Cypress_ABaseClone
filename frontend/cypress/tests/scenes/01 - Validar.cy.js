/// <reference types="cypress"/>

import { elementosProj } from "../lib/elements/01_elementos";
import { acessUrl } from "../lib/functions/01_validAccessUrl";

context("01 - PLATAFORMA X (Ex: Web)", () =>
{
    beforeEach(() =>
    {
        let pO = elementosProj()
        acessUrl()
    });

    describe('01 - 01 - NOME DA TELA (Ex: Home)', () =>
    {
        it('01 - 01.01 - NOME DO TESTE (Ex: Validar Acesso a Url)', () =>
        {
            
        }
    })
})