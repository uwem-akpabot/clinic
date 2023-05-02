import React from 'react'

const Basic_RightBar = () => {
  return (
    <>
      <div className="col-12 col-md-4">
        <div className="widget bg-primary">
            <div className="widget-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="state">
                        <h6>Patients</h6>
                        <h2>543</h2>
                    </div>
                    <div className="icon">
                        <i className="ik ik-users"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="widget bg-success">
            <div className="widget-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="state">
                        <h6>Consultation</h6>
                        <h2>3510</h2>
                    </div>
                    <div className="icon">
                        <i className="fa fa-stethoscope"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="widget bg-danger">
            <div className="widget-body">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="state">
                        <h6>Health Check</h6>
                        <h2>11</h2>
                    </div>
                    <div className="icon">
                        <i className="fa fa-syringe"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Basic_RightBar
