import React from 'react';

const Poke = ({ id, version }) => {
    return (
        <div className="col-sm-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <span>{version.name}</span>
                    <span>{'ID: ' + id}</span>
                </div>
                <div className="panel-body">
                    <h3>{version.name}</h3>
                    <img alt={version.name} />
                </div>
            </div>
        </div>
    );
}

export default Poke;