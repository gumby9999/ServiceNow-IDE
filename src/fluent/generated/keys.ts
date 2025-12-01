import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'dc8e117eac3d4e679410b4cc36674e96'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '439b33722ea34d37b20db5edcbbfc2ab'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '9b329996095f46fa90ac6d3d82fdf0d1'
                    }
                    'lodash.snakecase@4.1.1/index.js': {
                        table: 'sys_module'
                        id: 'd5390986c856440f98d674be71756627'
                    }
                    'lodash.snakecase@4.1.1/package.json': {
                        table: 'sys_module'
                        id: '29237076d0924fad85a42eb739a48bb8'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'dc1034c38a964dc5bc3a9a354cb2a433'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9b5f8bfe4fca4bd6ba0f5302213c2308'
                    }
                }
            }
        }
    }
}
