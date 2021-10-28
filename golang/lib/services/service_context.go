/*
 *    Copyright 2021 Kurtosis Technologies Inc.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 *
 */

package services

import (
	"context"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/kurtosis_engine_rpc_api_bindings"
	"github.com/kurtosis-tech/kurtosis-engine-api-lib/golang/lib/binding_constructors"
	"github.com/palantir/stacktrace"
)

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
type ServiceContext struct {
	client			kurtosis_engine_rpc_api_bindings.EngineServiceClient
	enclaveId       string
	serviceId		ServiceID
	ipAddress		string
	sharedDirectory	*SharedPath
}

func NewServiceContext(
		client kurtosis_engine_rpc_api_bindings.EngineServiceClient,
		enclaveId string,
		serviceId ServiceID,
		ipAddress string,
	    sharedDirectory *SharedPath) *ServiceContext {
	return &ServiceContext{
		client:          client,
		enclaveId:       enclaveId,
		serviceId:       serviceId,
		ipAddress:       ipAddress,
		sharedDirectory: sharedDirectory,
	}
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (self *ServiceContext) GetServiceID() ServiceID {
	return self.serviceId
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (self *ServiceContext) GetIPAddress() string {
	return self.ipAddress
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (self *ServiceContext) GetSharedDirectory() *SharedPath {
	return self.sharedDirectory
}

// Docs available at https://docs.kurtosistech.com/kurtosis-engine-api-lib/lib-documentation
func (self *ServiceContext) ExecCommand(command []string) (int32, string, error) {
	serviceId := self.serviceId
	args := binding_constructors.NewExecCommandArgs(
		self.enclaveId,
		string(serviceId),
		command,
	)
	resp, err := self.client.ExecCommand(context.Background(), args)
	if err != nil {
		return 0, "", stacktrace.Propagate(
			err,
			"An error occurred executing command '%v' on service '%v'",
			command,
			serviceId)
	}
	return resp.ExitCode, resp.LogOutput, nil
}
