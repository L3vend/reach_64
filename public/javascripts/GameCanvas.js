//=============================================================================
// namespace reach_64
//=============================================================================
var reach_64 = {};
(function (context)
{

//=============================================================================
// tile_color Enum
//=============================================================================
context.tile_color =
{
    tile_color_none : "#202020" ,
    tile_color_red : "#FF0000" ,
    tile_color_blue : "#0000FF"
}
 
//=============================================================================
// tile Class
//=============================================================================
context.tile = 
function ( x , y ) 
{
    this.x_ = x ;
    this.y_ = y ;

    this.color_ = reach_64.tile_color.tile_color_none ;
    this.level_ = 0 ;
} ;

//=============================================================================
// game_board Class
//=============================================================================
context.game_board = 
function ( num_tiles_x , num_tiles_y ) 
{
    this.num_tiles_x_ = num_tiles_x ;
    this.num_tiles_y_ = num_tiles_y ;

    this.tiles_ = new Array() ;

    for ( var y = 0 ; y < num_tiles_y ; ++y )
        for ( var x = 0 ; x < num_tiles_x ; ++x )
        {
            this.tiles_.push( new reach_64.tile( x , y ) ) ;
        }
} ;

//=============================================================================
// game_manager Class
//=============================================================================
context.game_manager = 
function ( num_tiles_x , num_tiles_y ) 
{
    this.game_board_ = new reach_64.game_board( num_tiles_x , num_tiles_y ) ;
} ;
    
//=============================================================================
// game_renderer Class
//=============================================================================
context.game_renderer = 
function () 
{
    this.render = function( game_manager , game_canvas_context , width , height ) 
    {
        var game_board = game_manager.game_board_ ;

        var tile_width = width / game_board.num_tiles_x_ ;
        var tile_height = height / game_board.num_tiles_y_ ;

        for ( var i = 0 ; i < game_board.tiles_.length ; ++i )
        {
            
            game_canvas_context.fillStyle = game_board.tiles_[ i ].color_ ;
            game_canvas_context.fillRect( game_board.tiles_[ i ].x_ * tile_width , 
                                          game_board.tiles_[ i ].y_ * tile_height , 
                                          tile_width , 
                                          tile_height ) ;

            game_canvas_context.fillStyle = "#000000" ;
            game_canvas_context.textAlign="center";
            game_canvas_context.textBaseline="middle"; 
            game_canvas_context.font="30px Verdana";
            game_canvas_context.fillText( game_board.tiles_[ i ].level_.toString() , 
                                          game_board.tiles_[ i ].x_ * tile_width + tile_width / 2 , 
                                          game_board.tiles_[ i ].y_ * tile_height + tile_height / 2 );
        }
    }

    

} ;

}
)(reach_64); // end namespace reach_64
//=============================================================================

//function on_load()
{
    //=============================================================================
    // Create an instance of the game manager
    var game_manager = new reach_64.game_manager( 4 , 4 ) ;

    //=============================================================================
    // Create an instance of the game renderer
    var game_renderer = new reach_64.game_renderer() ;

    //=============================================================================
    // Game Loop
    //=============================================================================

    // Update the game

    // Render the game
    var render_width = 200 ;
    var render_height = 200 ;
    var tile_width = 200 / 4 ;
    var tile_height = 200 / 4 ;

    var game_canvas = document.getElementById("game_canvas");
    game_canvas.width = render_width ;
    game_canvas.height = render_height ;

    var game_canvas_context = game_canvas.getContext("2d");

    game_renderer.render( game_manager , game_canvas_context , render_width , render_height ) ; 

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
            game_manager.game_board_.tiles_[ tile_index ].color_ = reach_64.tile_color.tile_color_red ;
            game_renderer.render( game_manager , game_canvas_context , render_width , render_height ) ; 
        } , 
        false ) ;

    game_canvas.addEventListener(
        'mouseout', 
        function( e ) 
        {
            console.log( "mouse_out" ) ;
            game_manager.game_board_.tiles_[ 0 ].color_ = reach_64.tile_color.tile_color_none ;
            game_renderer.render( game_manager , game_canvas_context , render_width , render_height ) ; 
        } , 
        false ) ;    
} ;





