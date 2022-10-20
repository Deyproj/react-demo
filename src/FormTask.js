import React, { useRef } from 'react';
import { AvField, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Button, Label } from 'reactstrap';

const FormTask = ( {onSubmit}) =>{
    let form = useRef();

    const _onSubmit = (values) => {
        onSubmit(values);
        form.reset();
    }


    return(
        <>
              <h3 className='mb-3'>Nueva Tarea</h3> 

              <AvForm ref={c => form = c} onValidSumit={(_, values) => _onSubmit(values)}>
                <AvGroup className="mb-3">
                    <AvField name="nombre" label="Nombre" required/>
                </AvGroup>

                <AvGroup check className="mb-3">
                    <AvInput type="checkbox" name="completado"/>
                    <Label check for="completado">Completado</Label>
                </AvGroup>

                <div className='text-end'>
                    <Button color='primary'>Guardar</Button>
                </div>
              </AvForm>

        </>
    );
}

export default FormTask;
