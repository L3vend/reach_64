//=============================================================================
// Create an instance of the game manager
var game_manager = new game_manager_module.game_manager( 4 , 4 ) ;

//=============================================================================
// Create an instance of the game renderer
var game_renderer = new game_renderer_module.game_renderer() ;

//=============================================================================
// Game Loop
//=============================================================================
setInterval( function(){ game_loop() } , 30 ) ;

function game_loop()
{
    update_game() ;
    render_game() ;
} ;

function update_game()
{

} ;

function render_game()
{
    var game_canvas = document.getElementById("game_canvas");

    if ( game_canvas === null )
        return ;

    var render_width = 400 ;
    var render_height = 400 ;
    var tile_width = 400 / 4 ;
    var tile_height = 400 / 4 ;

    game_canvas.width = render_width ;
    game_canvas.height = render_height ;

    //=============================================================================
    // Events Handling
    //=============================================================================
    game_canvas.addEventListener(
        'mousemove', 
        function( e )
        {
            var x = Math.floor( e.offsetX / tile_width ) ;
            var y = Math.floor( e.offsetY / tile_height ) ;
            var tile_index = y*4+x ;
            console.log( "mouse_over" + x + '/' + y + '/' + tile_index ) ;
            game_manager.game_board_.tiles_[ tile_index ].color_ = game_manager_module.tile_color.tile_color_red ;
            //game_renderer.render( game_manager , game_canvas_context , render_width , render_height ) ; 
        } , 
        false ) ;

    game_canvas.addEventListener(
        'mouseout', 
        function( e ) 
        {
            console.log( "mouse_out" ) ;
            game_manager.game_board_.tiles_[ 0 ].color_ = game_manager_module.tile_color.tile_color_none ;
            //game_renderer.render( game_manager , game_canvas_context , render_width , render_height ) ; 
        } , 
        false ) ;   

    var game_canvas_context = game_canvas.getContext("2d");

    game_renderer.render( game_manager , game_canvas_context , render_width , render_height ) ; 
} ;





